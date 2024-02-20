function PlaceHolder(){
    return (
      <>
        <div className="row">
          <div className="col-5 dis">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div className="col-3 dis">
            <input type="date" />
          </div>
          <div className="col-2 dis">
            <button type="button" className="btn btn-success btn-fix">
              add
            </button>
          </div>
        </div>
      </>
    );
}

export default PlaceHolder;