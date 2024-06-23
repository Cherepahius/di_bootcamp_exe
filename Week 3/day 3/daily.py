import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified")
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area()})"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

# Demonstration
if __name__ == "__main__":
    circle1 = Circle(radius=5)
    circle2 = Circle(diameter=20)
    
    print(circle1)  
    print(circle2)  
    
   
    circle3 = circle1 + circle2
    print(circle3)  
    
    
    print(circle1 < circle2)  
    print(circle1 == Circle(radius=5))  
    
    
    circles = [circle1, circle2, circle3]
    circles.sort()
    for circle in circles:
        print(circle)
