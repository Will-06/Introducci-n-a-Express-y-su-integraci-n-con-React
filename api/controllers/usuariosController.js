
let usuarios = [
    { id: 1, nombre: 'Wiler' },
    { id: 2, nombre: 'María' }
  ];
  
  exports.obtenerUsuarios = (req, res) => {
    res.json(usuarios);
  };
  
  exports.crearUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    nuevoUsuario.id = usuarios.length + 1; 
    usuarios.push(nuevoUsuario);
    res.status(201).json({
      mensaje: 'Usuario creado',
      usuario: nuevoUsuario
    });
  };
  
  exports.actualizarUsuario = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    let usuario = usuarios.find(u => u.id == id);
  
    if (usuario) {
      Object.assign(usuario, datos);
      res.json({ mensaje: `Usuario ${id} actualizado`, usuario });
    } else {
      res.status(404).json({ mensaje: `Usuario ${id} no encontrado` });
    }
  };
  
  exports.eliminarUsuario = (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(u => u.id == id);
  
    if (index !== -1) {
      usuarios.splice(index, 1);
      res.json({ mensaje: `Usuario ${id} eliminado` });
    } else {
      res.status(404).json({ mensaje: `Usuario ${id} no encontrado` });
    }
  };
  