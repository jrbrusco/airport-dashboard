const Cloudant = require("@cloudant/cloudant");
const configs = require("../configs/cloudantConfig");

/**
 * cloudant function helper
 * @module cloudantHelper
 * */

module.exports = function Constructor () {

    //connects to cloudant database
    return {
        "Client": (() => {
            try {
                return Cloudant(configs);
            } catch (e) {
                console.log(`Error initializing cloudant: ${e.message || e}`);
            }
        })(),
        /**
         * @method queryData
         * @async
         * @return {Array}
         */
        async queryData(dbName, queryObject = {}, fields = []) {
            return await this.Client.db.use(dbName).find({
                "selector": queryObject,
                "fields": fields
            });
        },
        /**
         * @method postData
         * @async
         * @return {Array}
         */
        async postData(dbName, document) {
            return await this.Client.db.use(dbName).insert(document);
        },
        /**
         * @method deleteData
         * @async
         * @return {Array}
         */
        async deleteData(dbName, id, rev) {
            return await this.Client.db.use(dbName).destroy(id, rev);
        },
        
        /**
         * @method updateData
         * @async
         * @return {Array}
         */
        //to write this method, I used https://stackoverflow.com/questions/31349447/how-do-i-update-a-doc-in-cloudant-using-cloudant-node-js
        async updateData(database, planeObj, id, rev) {
            var newDoc = {
                _id: id,
                _rev: rev,
                planeObject: planeObj
            }
            return await this.Client.db.use(database).insert(newDoc);
        }
    }
};