function preload() {

}

function setup() {
c = createCanvas(500,500)
c.center()
vid = createCapture(VIDEO)
vid.hide()
color1=""
}

function draw() {
image(vid,0,0,500,500)
tint(color1)
}

function add_filter() {
color1 = document.getElementById("filter").value;
}

function take_snapshot() {
save("filteredimage.png")    
}