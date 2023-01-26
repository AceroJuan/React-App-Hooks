import { renderHook } from '@testing-library/react';
import { useForm } from '../../Hooks/useForm';

describe('Pruebas en useForm.js', () => {
  test('debe retornar los valores por defecto', () => {
    const {} = renderHook(() => useForm());
  });
});
