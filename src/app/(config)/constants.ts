import { Edition } from '@/utils/types';

const NAME = 'something lovely';

/**
 * The glow on the signup page: a cover like an edition's, drawn by the same
 * generator. Typing an email rearranges it; these colours stay.
 */
const SIGNUP_COVER: Edition['cover'] = {
    seed: 4,
    colors: ['#FF8A6B', '#FFC46B', '#FFE9C7', '#F2637E'],
};

export { NAME, SIGNUP_COVER };
