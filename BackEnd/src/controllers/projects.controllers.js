import projectsModel from "../models/projects.model";

export async function createProject(req, res) {
  try {
    const { name, priority, description, deliveryDate } = req.body;

    const project = await projectsModel.create({
      name,
      priority,
      description,
      deliveryDate,
    });

    if (project) {
      res.json({
        data: project,
        message: "Proyecto creado",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
        data: {},
        message: "No se pudo crear el proyecto"
    })
  }
}
