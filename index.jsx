const styled = require("styled-components").default;
const React = require("react");

const Grid = styled.div`
  display: grid;
  grid-template-rows: ${({ rows }) => rows.join(" ")};
  grid-template-columns: ${({ columns }) => columns.join(" ")};
`;
const HorizontalSeparator = styled.div`
  border-color: black;
  cursor: ns-resize;
`;

export class SlideableGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    let {
      rows,
      columns,
    } = props;
    rows = rows.reduce((x, y) => [...x, y, "auto"], []);
    rows = rows.splice(0, rows.length - 1);
    columns = columns.reduce((x, y) => [...x, y, "auto"], []);
    columns = columns.splice(0, columns.length - 1);
    this.state = {
      rows,
      columns,
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Grid rows={rows} columns={columns}>
        {this.props.children.reduce((x, y) => [...x, y, <HorizontalSeparator/>], [])}
      </Grid>
    );
  }
}
