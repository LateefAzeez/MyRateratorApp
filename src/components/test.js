{this.state.routes.map(route => (
    <tr key={route.route_id}>
      <td>{route.route_id}</td>
      <td>{route.route_name}</td>
      {route.stations.map(station => {
        <tr key={station.stop}>
        <td>{route.stop}</td>
        {route.train_1.map(train => {
          if(train.location_name === station.stop) {
            <tr>
            <td>{train.id}</td>
            <td>{train.time}</td>
            <tr/>
          }
        })}
        
        
      })}
      <td>
        <button
          onClick={() => this.handleDelete(route)}
          className="btn btn-danger btn-sm"
        >
          Delete Route
        </button>
      </td>
    </tr>
  
  ))}