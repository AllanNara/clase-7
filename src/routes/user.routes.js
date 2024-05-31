import { Router } from "express";

const users = [
	{
    id: 1,
		name: "juan1",
		last_name: "perez",
		email: "junperez@mail.com",
		password: "123456",
	},
	{
    id: 2,
		name: "juan1",
		last_name: "perez",
		email: "junperez@mail.com",
		password: "123456",
	},
	{
    id: 3,
		name: "juan1",
		last_name: "perez",
		email: "junperez@mail.com",
		password: "123456",
	},
	{
    id: 4,
    name: "juan1",
		last_name: "perez",
		email: "junperez@mail.com",
		password: "123456",
	},
];

// localhost:8080/user/...
const router = Router();

// localhost:8080/user
router.get("/", (req, res) => {
  res.json({ message: "ok", users });
});

// localhost:8080/user
router.post("/", (req, res) => {
  const name = req.body.name
  const last_name = req.body.last_name
  const email = req.body.email
  const password = req.body.password

  if(!name || !last_name || !email || !password) {
    res.status(400).json({ error: "FALTAN CAMPOS PARA CREAR USUARIO!"});
    return
  }
  
  let id = users[users.length - 1].id + 1
  users.push({ name, last_name, email, password, id })
  
  res.status(201).json({ id })
})

// localhost:8080/user/:id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, last_name } = req.body;

  const userFound = users.find(u => u.id === id);

  if(userFound) {
    const index = users.findIndex(u => u.id === id);

    users[index] = { ...users[index], name, last_name }
    res.json({
      message: "Usuario actualizado con exito!",
      response: users[index]
    })

  } else {
    res.status(404).json({ error: "USUARIO NO ENCONTRADO"})
  }
})

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userFound = users.find(u => u.id === id);

  if(userFound) {
    const index = users.findIndex(u => u.id === id);
    users.splice(index, 1)
    res.send("Usuario con id " + id + " eliminado con exito")
  } else {
    res.status(404).json({ error: "USUARIO NO ENCONTRADO"})
  }
})


// localhost:8080/user/message
router.get("/mensaje", (req, res) => {
	res.json({ message: "HOLA A TODOS LOS ALUMNOS DE CODER!" });
});


router.get("*", (req, res) => {
  res.status(400)
  res.send('ESTA RUTA NO ESTA DEFINIDA')
})

export default router;
