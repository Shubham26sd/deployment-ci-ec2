import "dotenv/config";
declare const prismaSingleton: () => any;
declare global {
    var prisma: undefined | ReturnType<typeof prismaSingleton>;
}
declare const client: any;
export { client };
//# sourceMappingURL=index.d.ts.map