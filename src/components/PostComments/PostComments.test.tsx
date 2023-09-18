import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Testando envio da mensagem pelo click do botão comentar', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'Foto linda'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Foto linda')).toBeInTheDocument()
        })
    })

