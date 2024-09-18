import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const Login = () => {

    const [userName, setUsername] = useState('');

    const handleChangeUserName = (event) => {
        const value = event.target.value;
        if (value.includes("o") || value.includes("O")) {
          window.alert("Por favor, ¡Nombres de usuario sin la letra o!");
        } else {
          setUsername(value);
        }
    };
    
    const handleRegister = () => {
        if (userName === "" || userName.includes("o") || userName.includes("O")) {
          window.alert("Usuario inválido para registrarse");
        } else {
          window.alert("¡Usuario registrado correctamente!");
        }
    };

    return (
      <Card style={{ width: '30rem', padding: '20px', display: 'flex', alignItems: 'center', margin: 'auto' }}>
      <Form style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: '10px' }}>Nombre de usuario:</Form.Label>
              <Form.Control 
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  value={userName}
                  onChange={handleChangeUserName}
                  className="form-control-sm"
                  style={{ marginBottom: '10px' }}
              />
          </Form.Group>
          <Button className="btn btn-primary btn-sm" onClick={handleRegister}>
              Registrarse
          </Button>
          <p style={{ marginTop: '10px', fontSize: '0.9em' }}>{userName}</p>
      </Form>
  </Card>
)
}
export default Login