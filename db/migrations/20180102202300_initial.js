exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('jobs', table => {
      table.increments('id').primary();
      table.string('company');
      table.string('title');
      table.string('description');
      table.string('tech_stack')
      table.string('image_url')
      table.timestamps(true, true);
    }),

    knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('username').unique();
      table.string('google_uid').unique();
      table.timestamps(true, true);
    }),

    knex.schema.createTable('user_preferences', table => {
      table.increments('id').primary();
      table.boolean('android');
      table.boolean('c#');
      table.boolean('c++');
      table.boolean('devops');
      table.boolean('frontend');
      table.boolean('golang');
      table.boolean('ios');
      table.boolean('java');
      table.boolean('javascript');
      table.boolean('linux');
      table.boolean('management');
      table.boolean('net');
      table.boolean('other');
      table.boolean('perl');
      table.boolean('php');
      table.boolean('python');
      table.boolean('qa');
      table.boolean('ruby');
      table.boolean('scala');
      table.boolean('security');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id')
    }),

    knex.schema.createTable('jobs_tracked', table => {
      table.increments('id').primary();
      table.integer('job_id').unsigned();
      table.integer('user_id').unsigned();
      table.foreign('job_id').references('jobs.id');
      table.foreign('user_id').references('users.id');
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('jobs_tracked'),
    knex.schema.dropTable('user_preferences'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('jobs'),
  ])
};
