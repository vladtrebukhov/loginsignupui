const containerCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const CenterLayout = props => (
  <div className="container-center" style={containerCenter}>
    {props.children}
  </div>
);

export default CenterLayout;
