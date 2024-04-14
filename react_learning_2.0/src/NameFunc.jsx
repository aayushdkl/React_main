export function NameFunc({ name = "default", age = 32, isProgrammer }) {
  console.log("Is Programmer:", isProgrammer);
  return (
    <div>
      {/* {props.name} {props.age} */}
      {name} {age}
    </div>
  );
}
