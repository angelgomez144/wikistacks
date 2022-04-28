const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <label for="author-Name" class="col-sm-2 control-label"
        >Author Name</label
      >
      <div class="col-sm-10">
        <input
          id="author-Name"
          name="author-Name"
          type="text"
          class="form-control"
        />
      </div>

      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <label for="page-content" class="col-sm-2 control-label"
        >Page Content</label
      >
      <div class="col-sm-10">
        <input
          id="page-content"
          name="page-content"
          type="text"
          class="form-control"
        />
      </div>

      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
