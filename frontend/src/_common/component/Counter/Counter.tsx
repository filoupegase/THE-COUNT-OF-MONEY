import * as React from 'react';
import { memo } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from "../../../_core/_store/store";
import { counterSelectors, counterActions } from "../../../_core/_store/services/counter/slice";

export interface CounterProps {
    counterId: EntityId
}

export const Counter = memo(function Counter({ counterId }: CounterProps) {
    const counter = useAppSelector((state) =>
        counterSelectors.selectById(state, counterId)
    );

    const appDispatch = useAppDispatch();

    // @ts-ignore
    const { id, value } = counter

    const add = () => appDispatch(counterActions.updateBy({ id, delta: +1 }))
    return (
        <>
            <h4>ID: { id }</h4>
            <button className="btn-small" type="button" onClick={ add }>
                +
            </button>
            { value }
        </>
    )
})