import { render, screen } from '@testing-library/react'
import App from './App'

describe('Testes componente principal', () => {
    
    test('Deve renderizar o componente', () => {
        render(<App />)
        expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
    })
})