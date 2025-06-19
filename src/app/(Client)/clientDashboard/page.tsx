"use client";

// const hardcodedMeals = [
//   {
//     _id: "1",
//     trainerId: "trainer123",
//     clientId: "client456",
//     meals: "Chicken, Rice, Broccoli",
//   },
//   {
//     _id: "2",
//     trainerId: "trainer789",
//     clientId: "client456",
//     meals: "Salmon, Quinoa, Asparagus",
//   },
//   {
//     _id: "3",
//     trainerId: "trainer123",
//     clientId: "client456",
//     meals: "Beef, Sweet Potato, Green Beans",
//   },
// ];

// const PAGE_SIZE = 9;

const ClientDashboard = () => {
  // const [page, setPage] = useState(1);

  // const startIdx = (page - 1) * PAGE_SIZE;
  // const endIdx = startIdx + PAGE_SIZE;
  // const paginatedUsers = hardcodedMeals.slice(startIdx, endIdx);

  return (
    // <div style={{ width: "100vw", height: "80vh", padding: 20 }}>
    //   <div
    //     style={{
    //       display: "flex",
    //       flexWrap: "wrap",
    //       gap: 24,
    //       minHeight: 220,
    //     }}
    //   >
    //     {paginatedUsers.length > 0 ? (
    //       paginatedUsers.map((meal) => (
    //         <Card
    //           key={meal._id}
    //           style={{ minWidth: 300, maxHeight: 200, marginBottom: 16 }}
    //         >
    //           <Card.Meta
    //             avatar={
    //               <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    //             }
    //             title={`Trainer: ${meal.trainerId}`}
    //             description={<p>Meals: {meal.meals}</p>}
    //           />
    //         </Card>
    //       ))
    //     ) : (
    //       <div>No meals found.</div>
    //     )}
    //   </div>
    //   <div style={{ marginTop: 24, textAlign: "center" }}>
    //     <Pagination
    //       current={page}
    //       pageSize={PAGE_SIZE}
    //       total={hardcodedMeals.length}
    //       onChange={setPage}
    //       showSizeChanger={false}
    //     />
    //   </div>
    // </div>
    <div>Client meals</div>
  );
};

export default ClientDashboard;
