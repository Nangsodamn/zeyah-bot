type ZeyahNode = AnyZeyahElement | AnyZeyahElement[] | string | number | bigint | Iterable<ZeyahNode> | boolean | null | undefined;
type FCPropsLibraryManaged = {
    platform: PlatformType;
    /**
     * @deprecated
     */
    get childrenString(): string;
    getChildrenString(): string;
    childrenData: ZeyahChildrenData;
    selfData: ZeyahChildren;
    rootFiber: ZeyahFiber<any>;
};
type FCPropsDefaults = FCPropsLibraryManaged & {
    children?: ZeyahNode;
};
interface ZeyahChildren {
    /**
     * @deprecated
     */
    get rendered(): string;
    readonly getRendered: () => string;
    readonly fiber: ZeyahFiber | "string";
}
interface ZeyahChildrenData extends ReadonlyArray<ZeyahChildren> {
}
type PropsWithInfo<T = {}> = FCPropsDefaults & T;
type PlatformType = "facebook" | "discord" | "unspecified";
interface FC<Props = {}> {
    displayName?: string;
    (props: Props): ZeyahNode;
}
type FCPropsOf<TFC extends AnyFC> = TFC extends FC<infer Props> ? Props : never;
interface AnyFC extends FC<any> {
}
declare namespace Comment {
    /**
     * I had to learn the hard way that you should not use instanceof checks if you use bundle system, because different memory. But Symbol.hasInstance fixes this problem.
     */
    type _1 = 1;
}
declare class ZeyahElement<Props> {
    props: Props;
    type: FC<Props>;
    children: ZeyahNode;
    refKey: string;
    constructor(type: FC<Props>, props: Props, children: ZeyahNode);
    static refKey: string;
    static [Symbol.hasInstance](obj: any): boolean;
    renderDiscord(): string;
    renderFacebook(): string;
    toString(platform?: PlatformType): string;
    [Symbol.toPrimitive](hint: string): string | number;
    specialResolveCase?(...args: any[]): unknown;
}
interface AnyZeyahElement extends ZeyahElement<any> {
}
declare class ZeyahFiber<Props = any> {
    children: (ZeyahFiber | string)[];
    output: string[];
    jsxElem: ZeyahElement<Props>;
    states: Map<string, unknown>;
    root: ZeyahFiber<any>;
    constructor(element: ZeyahElement<Props>, root: ZeyahFiber<any> | "self-root");
    get type(): FC<Props>;
    get props(): PropsWithInfo<Props>;
    static collectChildren(initChildren: ZeyahNode, root: ZeyahFiber<any>): ZeyahFiber<any>["children"];
    static typeName(elem: AnyZeyahElement): string;
    collectChildren(): void;
    detectedParent?: ZeyahFiber<any>;
    get rootState(): Map<string, unknown>;
    render(platform: PlatformType): string[];
    buildString(): string;
}
declare const ZeyahFragment: FC<PropsWithInfo>;
declare const Platform: FC<PropsWithInfo<{
    type: PlatformType;
}>>;
declare function ensureArrayChildren(children: string | string[]): string[];
/**
 * Create a ZeyahFiber from an AnyZeyahElement
 */
declare function createZeyahTree(node: ZeyahNode): ZeyahFiber;
/**
 * Render a fiber or AnyZeyahElement for a given platform
 */
declare function renderZeyahTree(nodeOrFiber: ZeyahFiber | ZeyahNode, platform: PlatformType): string;
declare function NullishFilter(i: any): boolean;

type Zeyah_AnyFC = AnyFC;
type Zeyah_AnyZeyahElement = AnyZeyahElement;
declare const Zeyah_Comment: typeof Comment;
type Zeyah_FC<Props = {}> = FC<Props>;
type Zeyah_FCPropsDefaults = FCPropsDefaults;
type Zeyah_FCPropsLibraryManaged = FCPropsLibraryManaged;
type Zeyah_FCPropsOf<TFC extends AnyFC> = FCPropsOf<TFC>;
declare const Zeyah_NullishFilter: typeof NullishFilter;
declare const Zeyah_Platform: typeof Platform;
type Zeyah_PlatformType = PlatformType;
type Zeyah_PropsWithInfo<T = {}> = PropsWithInfo<T>;
type Zeyah_ZeyahChildren = ZeyahChildren;
type Zeyah_ZeyahChildrenData = ZeyahChildrenData;
type Zeyah_ZeyahElement<Props> = ZeyahElement<Props>;
declare const Zeyah_ZeyahElement: typeof ZeyahElement;
type Zeyah_ZeyahFiber<Props = any> = ZeyahFiber<Props>;
declare const Zeyah_ZeyahFiber: typeof ZeyahFiber;
declare const Zeyah_ZeyahFragment: typeof ZeyahFragment;
type Zeyah_ZeyahNode = ZeyahNode;
declare const Zeyah_createZeyahTree: typeof createZeyahTree;
declare const Zeyah_ensureArrayChildren: typeof ensureArrayChildren;
declare const Zeyah_renderZeyahTree: typeof renderZeyahTree;
declare namespace Zeyah {
  export { type Zeyah_AnyFC as AnyFC, type Zeyah_AnyZeyahElement as AnyZeyahElement, Zeyah_Comment as Comment, type Zeyah_FC as FC, type Zeyah_FCPropsDefaults as FCPropsDefaults, type Zeyah_FCPropsLibraryManaged as FCPropsLibraryManaged, type Zeyah_FCPropsOf as FCPropsOf, Zeyah_NullishFilter as NullishFilter, Zeyah_Platform as Platform, type Zeyah_PlatformType as PlatformType, type Zeyah_PropsWithInfo as PropsWithInfo, type Zeyah_ZeyahChildren as ZeyahChildren, type Zeyah_ZeyahChildrenData as ZeyahChildrenData, Zeyah_ZeyahElement as ZeyahElement, Zeyah_ZeyahFiber as ZeyahFiber, Zeyah_ZeyahFragment as ZeyahFragment, type Zeyah_ZeyahNode as ZeyahNode, Zeyah_createZeyahTree as createZeyahTree, Zeyah_ensureArrayChildren as ensureArrayChildren, Zeyah_renderZeyahTree as renderZeyahTree };
}

type ZeyahIntrinsics_2 = typeof ZeyahIntrinsics;
declare namespace ZeyahIntrinsics {
    const br: FC<{}>;
    const fragment: FC<PropsWithInfo<{}>>;
    const line: FC<{}>;
    const bold: FC<PropsWithInfo>;
}
interface ZeyahIntrinsics extends ZeyahIntrinsics_2 {
}
declare namespace ZeyahJSX {
    const a = "JSX";
    type IntrinsicElements = {
        [K in keyof ZeyahIntrinsics]: LibraryManagedAttributes<ZeyahIntrinsics[K], Parameters<ZeyahIntrinsics[K]>[0]>;
    };
    type Element = AnyZeyahElement;
    type PropsOf<C> = C extends FC<infer P> ? P : never;
    type LibraryManagedAttributes<C, P> = C extends FC<any> ? Omit<PropsOf<C>, "key" | keyof FCPropsLibraryManaged> : P;
    type ElementType = AnyFC | string;
}
type UserProps<P> = Omit<PropsWithInfo<P>, keyof FCPropsLibraryManaged>;
type IntrinsicNames = keyof ZeyahJSX.IntrinsicElements | "";
declare function createElement<TFC extends AnyFC | IntrinsicNames>(type: TFC, props: UserProps<TFC extends AnyFC ? FCPropsOf<TFC> : TFC extends keyof ZeyahJSX.IntrinsicElements ? ZeyahJSX.IntrinsicElements[TFC] : never>, _key: string): AnyZeyahElement;

export { type AnyFC as A, Comment as C, type FC as F, NullishFilter as N, type PropsWithInfo as P, Zeyah as Z, type AnyZeyahElement as a, type FCPropsDefaults as b, type FCPropsLibraryManaged as c, type FCPropsOf as d, Platform as e, type PlatformType as f, type ZeyahChildren as g, type ZeyahChildrenData as h, ZeyahElement as i, ZeyahFiber as j, ZeyahFragment as k, ZeyahJSX as l, type ZeyahNode as m, createElement as n, createZeyahTree as o, ensureArrayChildren as p, renderZeyahTree as r };
