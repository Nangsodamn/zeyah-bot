import { F as FC, P as PropsWithInfo, Z as Zeyah } from './zeyah-jsx-B831dQJl.js';
export { A as AnyFC, a as AnyZeyahElement, C as Comment, b as FCPropsDefaults, c as FCPropsLibraryManaged, d as FCPropsOf, N as NullishFilter, e as Platform, f as PlatformType, g as ZeyahChildren, h as ZeyahChildrenData, i as ZeyahElement, j as ZeyahFiber, k as ZeyahFragment, l as ZeyahJSX, m as ZeyahNode, n as createElement, o as createZeyahTree, p as ensureArrayChildren, r as renderZeyahTree } from './zeyah-jsx-B831dQJl.js';
import { FontTypes } from '@nea-liane/styler';

/** @jsxImportSource . */

declare const Break: FC<{}>;
declare const Bold: FC<PropsWithInfo>;
declare const Italic: FC<PropsWithInfo>;
declare const UniFont: FC<PropsWithInfo<{
    type: FontTypes;
}>>;
declare const Code: FC<PropsWithInfo>;
interface CodeBlockProps {
    lang?: string;
}
declare const CodeBlock: FC<PropsWithInfo<CodeBlockProps>>;
declare const Quote: FC<PropsWithInfo>;
declare const Spoiler: FC<PropsWithInfo>;
declare const Text: FC<PropsWithInfo<{
    noEscape?: boolean;
}>>;
declare function escapeDiscordMarkdown(str: string): string;
declare const Repeated: FC<PropsWithInfo<{
    times: number;
}>>;
interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
declare const Heading: FC<PropsWithInfo<HeadingProps>>;
interface LinkProps {
    url: string;
}
declare const Link: FC<PropsWithInfo<LinkProps>>;
declare const Line: FC;
interface MentionProps {
    discordID?: string;
    fbName?: string;
}
declare const Mention: FC<PropsWithInfo<MentionProps>>;
interface ListProps {
    ordered?: boolean;
    prefix?: string;
    start?: number;
    boldPrefix?: boolean;
    indent?: number;
}
declare const List: FC<PropsWithInfo<ListProps>>;
declare const ListItem: FC<PropsWithInfo>;
declare const Indent: FC<PropsWithInfo<{
    level: number;
}>>;
interface CassProps {
    title: string;
    fbTitleFont?: FontTypes;
    fbContentFont?: FontTypes;
}
declare const CassFormat: FC<PropsWithInfo<CassProps>>;

export { Bold, Break, CassFormat, type CassProps, Code, CodeBlock, type CodeBlockProps, FC, Heading, type HeadingProps, Indent, Italic, Line, Link, type LinkProps, List, ListItem, type ListProps, Mention, type MentionProps, PropsWithInfo, Quote, Repeated, Spoiler, Text, UniFont, Zeyah, Zeyah as default, escapeDiscordMarkdown };
