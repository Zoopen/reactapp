import React from 'react'
// 以class组件形式实现：
// export default class Table extends React.Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Nicoras</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Merry</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

// 以函数组件形式实现:
// const TableHeader = () => {
//     return (
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Job</th>
//             </tr>
//         </thead>
//     )
// }

// const TableBody = () => {
//     return (
//         <tbody>
//             <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//             </tr>
//             <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//             </tr>
//             <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//             </tr>
//             <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//             </tr>
//         </tbody>
//     )
// }

// class Table extends React.Component {
//     render() {
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody />
//             </table>
//         )
//     }
// }

// export default Table;

//允许相互嵌套
class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
        )
    }
}

class TableBody extends React.Component {
    render() {
        const {characterData, removeCharacter} = this.props
        const rows = characterData.length ? 
        characterData.map((row,index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td>
                        <button onClick={() => removeCharacter(index)}>Delete</button>
                    </td>
                </tr>
            )
        })
        :
        <tr>
            <td colSpan="3" style={{textAlign:'center'}}>Nothing</td>
        </tr>
        return <tbody>{rows}</tbody>
    }
}

const Table = (props) => {
    const {characterData, removeCharacter} = props
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table;