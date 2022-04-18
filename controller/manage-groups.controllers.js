const db = require('../manage-users-db')


class GroupController {
    async createGroup(req, res) {
        const {groupname, groupdescription} = req.body
        const newGroup = await db.query(
                `INSERT INTO groups (groupname, groupdescription) values ($1, $2) RETURNING *`, 
                [groupname, groupdescription]
            )      
        res.json(newGroup.rows[0])
        // const groups = await db.query(`SELECT * FROM groups ORDER BY id ASC`)
        // res.json(groups.rows)
    }
    async getGroups(req, res) {
        const groups = await db.query(`SELECT * FROM groups ORDER BY id ASC`)
        res.json(groups.rows)
    }

    // async getUser(req, res) {
        
    // }

    async updateGroup(req, res) {
        const {groupname, groupdescription, id} = req.body
        const group = await db.query(
            'UPDATE groups set groupname = $1, groupdescription = $2 where id = $3 RETURNING *',
            [groupname, groupdescription, id]
        )
        //res.json(group.rows[0])
        const groups = await db.query(`SELECT * FROM groups ORDER BY id ASC`)
        res.json(groups.rows)
    }
    async deleteGroup(req, res) {
        const id = req.params.id
        await db.query(`DELETE FROM groups where id = $1`, [id])
        //res.json(user.rows)
        //res.json({ message: `id #${id} был удален` })

        const groups = await db.query(`SELECT * FROM groups ORDER BY id ASC`)
        res.json(groups.rows)
    }
}

module.exports = new GroupController()

