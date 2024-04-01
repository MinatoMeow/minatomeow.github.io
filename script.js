function changeFace(img) {
    const faces = ["complacent", "confuse","curious","injured","normal","sly", "surprised", "tired","upset","wink"];

    var rng = Math.floor(Math.random()*10);
    document.getElementById("logo").src=`./assets/mm-${faces[rng]}.svg`;

}