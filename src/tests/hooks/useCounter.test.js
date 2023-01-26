import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../Hooks/useCounter';

describe('Pruebas en el useCounter.js', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe retornar como valor por defecto 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(2);
  });

  test('debe decrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(0);
  });

  test('debe resetear el valor de counter', () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
