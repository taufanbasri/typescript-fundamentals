function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());

  console.log("Hola!");
}

greet(null);
