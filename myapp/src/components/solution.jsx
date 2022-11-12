import React, { Component } from 'react';

class Solution extends Component {
    state = { 
        solutions: [
            {key: 10, number: 1164, title: "加工零件", views: 2930},
            {key: 11, number: 1165, title: "加工零件", views: 2931},
            {key: 12, number: 1166, title: "加工零件", views: 2932},
            {key: 13, number: 1167, title: "加工零件", views: 2933},
            {key: 14, number: 1168, title: "加工零件", views: 2934},
            {key: 15, number: 1169, title: "加工零件", views: 2935},
            {key: 16, number: 1170, title: "加工零件", views: 2936},
            {key: 17, number: 1171, title: "加工零件", views: 2937}, 

        ],
        cur_k: 18,
        cur_number: 1171
        
    } 


    handleAdd = () => {
        const solutions = [...this.state.solutions, {
            key: this.state.cur_k, number: this.state.cur_number, title: "加工零件", views: 2938
        }]
        this.setState({
            solutions,
            cur_k: this.state.cur_k + 1,
            cur_number: this.state.cur_number + 1
        });
    }

    //删除
    handleDelete = (s) => {
        // console.log(solution.number);
        const solutions = this.state.solutions.filter(solution => solution !== s);        // filter函数将数组或列表中的每一个值通过传入的函数作用一遍，如果为true就留下，如果为false就删去
        this.setState({
            solutions: solutions
        })
    }



    render() { 
        if(this.state.solutions.length === 0) return(
            <div className="alert alert-danger" role="alert" align="center">
                没有题解啦!😢
            </div>
        )

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读数量</th>
                        <th>操作1</th>
                        <th>操作2</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map((solution) => (
                        <tr key={solution.key}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={() => this.handleAdd(solution)} className='btn btn-success'>添加</button></td>
                            <td><button onClick={() => this.handleDelete(solution)} className='btn btn-danger'>删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

}
 
export default Solution;
