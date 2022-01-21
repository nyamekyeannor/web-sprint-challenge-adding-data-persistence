exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable().unique();
      table.string("project_description", 200);
      table.integer("project_completed", 10).defaultTo(0);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).notNullable().unique();
      table.string("resource_description", 200);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 200).notNullable();
      table.integer("task_notes", 200);
      table.integer("task_completed", 10).defaultTo(0);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resource_id");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
