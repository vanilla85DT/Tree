class NodeData{
     element : number
     nextleft : NodeData | null
     nextright : NodeData | null
     constructor(elem : number){
          this.element = elem
          this.nextleft = null
          this.nextright = null
     }
}

export class BinaryTree{
     root : NodeData | null //สร้างตัวแปร Binarytree
     constructor(){ //ค่าเริ่มต้น
          this.root = null
     }
     //เพิ่มแบบ Binary 
     addRecursive(current : NodeData | null = null, elem : number) : NodeData | null{ 
          if(current == null){
               //ไม่มีการส่งข้อมูลเข้าไปเพิ่ม
               return new NodeData(elem) //สร้างขึ้นมา
          } 
          if(elem < current.element){
               //ตรวจสอบกรณีที่มี current เป็นแม่อยู่แล้ว น้อยกว่า ลูกซ้าย มาก ลูกขวา
               current.nextleft = this.addRecursive(current.nextleft,elem) //ให้ไปอยู่ซ้าย = น้อยกว่าcurrent
          }
          else if(elem > current.element){
               current.nextright = this.addRecursive(current.nextright,elem)
          }
          else{
               return current
          }
          
          return current
     }

     add(elem : number){
          this.root = this.addRecursive(this.root,elem)
     }

     travereInOrder(n : NodeData | null = null){ //L N R
          if(n != null){
               this.travereInOrder(n.nextleft) //L ก่อน
               console.info(n.element) //Display กลาง
               this.travereInOrder(n.nextright) //R ตาม
          }
     }

     traverePreOrder(n : NodeData | null = null){ //N L R
          if(n != null){
               console.info(n.element)
               this.traverePreOrder(n.nextleft)
               this.traverePreOrder(n.nextright)
          }
     }

     //HW Post-Order และเรียกใช้ 
     traverePostOrder(n : NodeData | null = null){ //L R N
          if(n != null){
               this.traverePostOrder(n.nextleft)
               this.traverePostOrder(n.nextright)
               console.info(n.element)
          }
     }
}