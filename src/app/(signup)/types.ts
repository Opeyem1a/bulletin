/**
 * Lives outside actions.ts because a 'use server' module may only export async
 * functions.
 */
type SignupState =
    | { status: 'idle' }
    | { status: 'success' }
    | { status: 'error'; message: string };

export type { SignupState };
