function welcomealex() {
  console.log("vanga anna vankamm anna");
  $("ol.breadcrumb").append(
    `<li class="breadcrumb-item"><a href="/my/courses.php" class="bc-items">Alex Courses</a></li>`
  );
}

function ExecutionVisualizer(domRootID, dat, params) {
  console.log("Constructor execution visualizer");
}

ExecutionVisualizer.prototype.redrawConnectors = function () {
  console.log("Prototype redraw connectors");
};
