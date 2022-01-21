const projects = [
  {
    project_name: "WorkSpace",
    project_description: "A web-application that store offices",
    project_completed: 0,
  },
  {
    project_name: "Shelving Unit",
    project_description: "Build a custom shelving unit in bedroom",
    project_completed: 1,
  },
];
const resources = [
  { resource_name: "Computer", resource_description: "MacBook Pro" },
  { resource_name: "Notebook", resource_description: "Moleskin" },
  { resource_name: "Pen", resource_description: "G2" },
  { resource_name: "Shelves", resource_description: "Naturally stained wood" },
  { resource_name: "Screws", resource_description: "Twenty screws" },
  { resource_name: "Drill", resource_description: "Drill with phillips head" },
];
const tasks = [
  {
    task_description: "Create wireframe",
    task_notes: "Try not to do too much. We want MVP",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "Code the basics of the project",
    task_notes: "Quick and dirty.",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "Clean up the project and deploy",
    task_notes: "",
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: "Design your layout",
    task_notes: "",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "Mark holes",
    task_notes: "Find where your screws need to be on wall and make an x",
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: "Drill shelves into the wall",
    task_notes: "",
    task_completed: 1,
    project_id: 2,
  },
];
const project_resources = [
  { resource_id: 2, project_id: 1 },
  { resource_id: 3, project_id: 1 },
  { resource_id: 2, project_id: 1 },
  { resource_id: 3, project_id: 2 },
  { resource_id: 4, project_id: 2 },
  { resource_id: 5, project_id: 2 },
  { resource_id: 6, project_id: 2 },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
