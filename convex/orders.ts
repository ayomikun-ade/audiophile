import { internalMutation, mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    orderId: v.string(),
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
    }),

    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),

    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const getOrders = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("orders").collect();
  },
});

export const updateOrderStatus = internalMutation({
  args: { id: v.id("orders"), status: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

export const updateStatusByCustomId = mutation({
  args: {
    orderId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_custom_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!order) {
      throw new Error("Order not found");
    }

    await ctx.db.patch(order._id, { status: args.status });
    return order._id;
  },
});

export const listOrders = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("orders").order("desc").collect();
  },
});

export const getOrderByCustomId = query({
  args: {
    customId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_custom_id", (q) => q.eq("orderId", args.customId))
      .unique();
  },
});
