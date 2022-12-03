
function Follower(props: any) {
    return (
        <>
            <tr>
                <td scope="col">{props.userId}</td>
                <td scope="col">{props.nickname}</td>
                <td scope="col">{props.email}</td>
            </tr>
        </>
    )
}

export default Follower;