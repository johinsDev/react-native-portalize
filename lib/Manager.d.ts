import * as React from 'react';
export interface IManagerHandles {
    mount(key: number, children: React.ReactNode): void;
    update(key?: number, children?: React.ReactNode): void;
    unmount(key?: number): void;
}
export declare const Manager: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
