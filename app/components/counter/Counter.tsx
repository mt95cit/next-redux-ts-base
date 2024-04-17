'use client'

import { useState } from 'react'

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus
} from '@/lib/features/counter/counterSlice'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import styles from './Counter.module.css'
import styled from 'styled-components'
import stylesSCSS from '~/assets/scss/main.module.scss'

const Wrapper = styled.div`
  color: red;
  text-align: center;
`

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <Wrapper>Count Pages</Wrapper>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
      <div className={stylesSCSS.hello}>Hellow SASS</div>

      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
        <span aria-label='Count' className={styles.value}>
          {count}
        </span>
        <button className={styles.button} aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          type='number'
          onChange={(e) => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== 'idle'}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
