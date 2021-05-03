export interface I14eContext {
    /** The reference key. */
    _?: string;

    hint?: string;

    type?: 'plain' | 'html' | 'markdown';
}

export type I14eFn = (context?: I14eContext) => string;

export function __(strings: TemplateStringsArray, ...keys: any[]): I14eFn {
    // TODO: Log stack trace location.
    return () => {
        return strings.join();
    };
}