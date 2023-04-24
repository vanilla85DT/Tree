"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var NodeData = /** @class */ (function () {
    function NodeData(elem) {
        this.element = elem;
        this.nextleft = null;
        this.nextright = null;
    }
    return NodeData;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    //เพิ่มแบบ Binary 
    BinaryTree.prototype.addRecursive = function (current, elem) {
        if (current === void 0) { current = null; }
        if (current == null) {
            //ไม่มีการส่งข้อมูลเข้าไปเพิ่ม
            return new NodeData(elem); //สร้างขึ้นมา
        }
        if (elem < current.element) {
            //ตรวจสอบกรณีที่มี current เป็นแม่อยู่แล้ว น้อยกว่า ลูกซ้าย มาก ลูกขวา
            current.nextleft = this.addRecursive(current.nextleft, elem); //ให้ไปอยู่ซ้าย = น้อยกว่าcurrent
        }
        else if (elem > current.element) {
            current.nextright = this.addRecursive(current.nextright, elem);
        }
        else {
            return current;
        }
        return current;
    };
    BinaryTree.prototype.add = function (elem) {
        this.root = this.addRecursive(this.root, elem);
    };
    BinaryTree.prototype.travereInOrder = function (n) {
        if (n === void 0) { n = null; }
        if (n != null) {
            this.travereInOrder(n.nextleft); //L ก่อน
            console.info(n.element); //Display กลาง
            this.travereInOrder(n.nextright); //R ตาม
        }
    };
    BinaryTree.prototype.traverePreOrder = function (n) {
        if (n === void 0) { n = null; }
        if (n != null) {
            console.info(n.element);
            this.traverePreOrder(n.nextleft);
            this.traverePreOrder(n.nextright);
        }
    };
    //HW Post-Order และเรียกใช้ 
    BinaryTree.prototype.traverePostOrder = function (n) {
        if (n === void 0) { n = null; }
        if (n != null) {
            this.traverePostOrder(n.nextleft);
            this.traverePostOrder(n.nextright);
            console.info(n.element);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
