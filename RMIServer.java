import java.rmi.*;

public class RMIServer{
    public static void main(String args[]){
        try{
            Fibonacci fibonacciInterface = new FibonacciRemote();
            Naming.rebind("rmi://localhost:5000/hello",fibonacciInterface);
        }catch(Exception e){
            System.out.println(e);
        }

    }
    
}