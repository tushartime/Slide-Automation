import Stripe from 'stripe'

// Initialize Stripe only when a secret key is available. This prevents crashes
// in development environments where Stripe is not configured.
export const stripe: Stripe | null = process.env.STRIPE_CLIENT_SECRET
  ? new Stripe(process.env.STRIPE_CLIENT_SECRET, {
      apiVersion: '2025-02-24.acacia',
    })
  : null