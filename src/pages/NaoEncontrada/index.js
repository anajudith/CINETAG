import styles from './NaoEncontrada.module.css';

import React from 'react'

function NaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteudo nao foi encontrado.</p>
    </section>
  )
}

export default NaoEncontrada