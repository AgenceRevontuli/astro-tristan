/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module'*.scss' {
    const content: {[key: string]: any}
    export = content
}