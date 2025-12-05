declare module 'astro:assets' {
  // Minimal ambient declaration for the virtual `astro:assets` module
  // It exports an `Image` component used in .astro files. Use `any`
  // to avoid type errors while leaving implementation to Astro.
  export const Image: any;
}
