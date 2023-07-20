import React from 'react';


class ErrorBoundary extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Registra l'errore o esegui azioni di recupero
      this.setState({ hasError: true });
    }
  
    render() {
      
      if (this.state.hasError) {
        // Mostra il messaggio di errore
     
        return <div><h2>Si è verificato un errore generico. Riprova o contatta l'assistenza.</h2></div>;
      }
      // Altrimenti, rendi i componenti figli normalmente
      return this.props.children;
    }
  }
export default ErrorBoundary;