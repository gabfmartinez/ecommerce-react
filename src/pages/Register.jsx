const Register = () => {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
