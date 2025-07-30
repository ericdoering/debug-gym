export default function TopNav(props: { isViewer: unknown; }) {
const { isViewer } = props
  return (
    <>
      <div className="questions-btn">
        <button className="card-button-primary menu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <button className="card-button-secondary">
          <h6>Save</h6>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button className="card-button-secondary">
          {isViewer ? (
            <>
              <h6>Viewer</h6>
              <i className="fa-solid fa-check-double"></i>
            </>
          ) : (
            <>
              <h6>Editor</h6>
              <i className="fa-solid fa-pencil"></i>
            </>
          )}
        </button>
      </div>
      <div className="full-line"></div>
    </>
  );
}
