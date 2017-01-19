const inputs = document.querySelectorAll(".controls input"); //forEach funzt heir endlicheeeeeerrrrbums

function handleUpdate(){
	const suffix = this.dataset.sizing || ''; //"px"

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener("change", handleUpdate)); //ES6
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));