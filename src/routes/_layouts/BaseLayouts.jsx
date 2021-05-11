export default function BaseLayouts(Component) {
  return (props) => {
    return <div>
      <Component {...props} />
    </div>;
  };
}
