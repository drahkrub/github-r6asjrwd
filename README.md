# Comparing the behavior of `pinia-colada` and `@tanstack/vue-query`

This is a simplified demo project comparing the behavior of
[@pinia/colada](https://pinia-colada.esm.dev/)
and
[@tanstack/vue-query](https://tanstack.com/query/latest/docs/framework/vue/overview).

Maybe my setup is wrong, but this is the way I do it when using `@tanstack/vue-query` in CRUD apps (form based editing).

I would like to switch to `pinia-colada`, but my current problem is that the watcher in "pinia-colada" fires too often and destroys changes in input fields.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
