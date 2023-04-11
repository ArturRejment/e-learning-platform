from rest_framework import permissions

class IsAdminUser(permissions.BasePermission):
    def has_permission(self, request):
        return bool(request.user and request.user.is_staff)